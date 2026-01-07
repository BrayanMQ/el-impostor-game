import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight, Play } from 'lucide-react-native';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';
import { useSettingsStore } from '../../store/settingsStore';

export default function RoundStart() {
    const { players, starterPlayerId, direction } = useGameStore();
    const { appTheme } = useSettingsStore();
    const isDark = appTheme === 'dark';
    const router = useRouter();

    const starter = players.find(p => p.id === starterPlayerId);

    return (
        <ScreenWrapper>
            <View className="flex-1 justify-center px-4">
                {/* Starting Player Section */}
                <View className="items-center mb-10">
                    <AppText className={`font-black text-sm uppercase tracking-[2px] mb-4 ${isDark ? 'text-[#B6C2E2]' : 'text-gray-500'}`}>
                        STARTING PLAYER
                    </AppText>
                    <AppText className={`text-6xl font-black text-center ${isDark ? 'text-white' : 'text-[#101828]'}`}>
                        {starter?.name}
                    </AppText>
                </View>

                {/* Direction Section */}
                <View className="items-center mb-6">
                    <AppText className={`font-black text-sm uppercase tracking-[2px] mb-6 ${isDark ? 'text-[#B6C2E2]' : 'text-gray-500'}`}>
                        DIRECTION
                    </AppText>

                    <View className={`${isDark ? 'bg-[#182235]' : 'bg-white shadow-sm border border-gray-100'} w-full py-10 rounded-[32px] flex-row items-center justify-center gap-4`}>
                        <AppText className="text-[#4CC9F0] text-4xl font-black">
                            {direction}
                        </AppText>
                        {direction === 'Left' ? (
                            <ArrowLeft size={44} color="#4CC9F0" strokeWidth={3} />
                        ) : (
                            <ArrowRight size={44} color="#4CC9F0" strokeWidth={3} />
                        )}
                    </View>
                </View>

                {/* Info Card Section */}
                <View className={`${isDark ? 'bg-[#182235]' : 'bg-white shadow-sm border border-gray-100'} w-full p-8 rounded-[32px] mb-12`}>
                    <AppText className={`text-lg text-center leading-relaxed font-bold ${isDark ? 'text-white' : 'text-[#101828]'}`}>
                        Starting with <AppText className="text-primary-action">{starter?.name}</AppText>, go {direction} and say one word related to the secret word.
                    </AppText>
                </View>
            </View>

            {/* Bottom Button */}
            <View className="px-6 pb-10">
                <Button
                    title="Start Round"
                    onPress={() => router.replace('/game/play')}
                    className="w-full h-18"
                    icon={<Play size={24} color="white" fill="white" />}
                    iconPosition="left"
                />
            </View>
        </ScreenWrapper>
    );
}
