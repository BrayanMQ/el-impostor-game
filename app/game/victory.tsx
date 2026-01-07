import { useRouter } from 'expo-router';
import { Home, RefreshCw, Trophy } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';
import { useSettingsStore } from '../../store/settingsStore';

export default function VictoryScreen() {
    const { players, secretWord, resetGame } = useGameStore();
    const { appTheme } = useSettingsStore();
    const isDark = appTheme === 'dark';
    const router = useRouter();

    const impostors = players.filter(p => p.role === 'impostor');
    const aliveImpostors = impostors.filter(p => p.isAlive);
    const winner = aliveImpostors.length > 0 ? 'impostor' : 'civilian';

    const handlePlayAgain = () => {
        resetGame();
        router.replace('/setup/players');
    };

    const handleHome = () => {
        resetGame();
        router.replace('/');
    };

    return (
        <ScreenWrapper className="justify-between py-8 px-6">
            <View className="items-center flex-1 justify-center w-full">
                <View className="mb-6 items-center justify-center">
                    <Trophy size={64} color="#E5533D" strokeWidth={1.5} />
                </View>

                <AppText className="text-primary-action font-black text-4xl text-center leading-tight mb-2 uppercase">
                    {winner === 'impostor' ? 'IMPOSTORS\nWIN' : 'CIVILIANS\nWIN'}
                </AppText>

                <AppText className="text-text-secondary text-sm text-center mb-8 px-10">
                    {winner === 'impostor'
                        ? "Impostors outnumbered civilians!"
                        : "All impostors have been eliminated!"}
                </AppText>

                <View className={`${isDark ? 'bg-[#182235]' : 'bg-white shadow-lg border border-gray-100'} w-full p-6 rounded-[32px] items-center`}>
                    <AppText className={`font-black text-[10px] uppercase tracking-[3px] mb-2 ${isDark ? 'text-[#B6C2E2]' : 'text-gray-500'}`}>
                        THE SECRET WORD WAS
                    </AppText>
                    <AppText className={`text-3xl font-black text-center ${isDark ? 'text-white' : 'text-[#101828]'}`}>
                        {secretWord}
                    </AppText>
                </View>
            </View>

            <View className="w-full items-center gap-5 mt-8 pb-4">
                <Button
                    title="Play Again"
                    onPress={handlePlayAgain}
                    className="w-4/5 h-12"
                    icon={<RefreshCw size={18} color="white" />}
                    iconPosition="left"
                    textClassName="text-base"
                />

                <TouchableOpacity
                    onPress={handleHome}
                    activeOpacity={0.7}
                    className="flex-row items-center justify-center py-2"
                >
                    <Home size={18} color={isDark ? "#B6C2E2" : "#98A2B3"} />
                    <AppText
                        className={`ml-2 font-bold text-base ${isDark ? "text-[#B6C2E2]" : "text-gray-500"}`}
                        style={{ includeFontPadding: false }}
                    >
                        Back to Home
                    </AppText>
                </TouchableOpacity>
            </View>
        </ScreenWrapper>
    );
}
