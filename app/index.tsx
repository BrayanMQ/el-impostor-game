import { useRouter } from 'expo-router';
import { HelpCircle, Play, Settings, X } from 'lucide-react-native';
import { useState } from 'react';
import { Modal, TouchableOpacity, View } from 'react-native';
import { Button } from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { AppText } from '../components/Typography';
import { useSettingsStore } from '../store/settingsStore';

export default function HomeScreen() {
    const router = useRouter();
    const [showHowToPlay, setShowHowToPlay] = useState(false);
    const { appTheme } = useSettingsStore();
    const isDark = appTheme === 'dark';

    return (
        <ScreenWrapper className="justify-center items-center">
            {/* Settings Icon */}
            <TouchableOpacity
                onPress={() => router.push('/settings')}
                className="absolute top-4 right-2 p-4"
            >
                <Settings size={28} color={isDark ? "#B6C2E2" : "#475467"} />
            </TouchableOpacity>

            <View className="flex-1 justify-center items-center w-full">
                <AppText variant="h1" className="text-6xl font-black mb-2 text-center">
                    El Impostor
                </AppText>
                <AppText variant="body" className="text-text-secondary text-center text-xl mb-16">
                    Find who doesn’t know the word
                </AppText>

                <View className="w-full gap-6 max-w-sm px-4">
                    <Button
                        title="Play"
                        icon={<Play size={24} color="white" fill="white" />}
                        onPress={() => router.push('/setup/players')}
                        className="w-full h-20 rounded-3xl"
                        textClassName="text-2xl"
                    />

                    <TouchableOpacity
                        onPress={() => setShowHowToPlay(true)}
                        className="flex-row items-center justify-center py-2"
                    >
                        <HelpCircle size={22} color={isDark ? "#B6C2E2" : "#475467"} className="mr-2" />
                        <AppText className={`${isDark ? 'text-text-secondary' : 'text-[#475467]'} text-lg font-bold`}>How to Play</AppText>
                    </TouchableOpacity>
                </View>
            </View>

            {/* How to Play Sheet */}
            <Modal
                visible={showHowToPlay}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setShowHowToPlay(false)}
            >
                <View className="flex-1 justify-end bg-black/40">
                    <TouchableOpacity
                        className="flex-1"
                        activeOpacity={1}
                        onPress={() => setShowHowToPlay(false)}
                    />
                    <View className={`${isDark ? 'bg-[#182235]' : 'bg-white'} rounded-t-[40px] px-8 pt-10 pb-16 shadow-2xl`}>
                        <View className="flex-row justify-between items-center mb-10">
                            <AppText variant="h1" className="text-3xl font-black mb-0">How to Play</AppText>
                            <TouchableOpacity onPress={() => setShowHowToPlay(false)} className={`${isDark ? 'bg-surface-soft' : 'bg-gray-100'} p-2 rounded-full`}>
                                <X size={24} color={isDark ? "#B6C2E2" : "#475467"} />
                            </TouchableOpacity>
                        </View>

                        <View className="gap-8">
                            <View>
                                <AppText className="text-accent text-xl font-black mb-2">1. Pass the phone</AppText>
                                <AppText className="text-text-secondary text-lg leading-relaxed">
                                    Each player sees their secret role. Civilians get a secret word. Impostors see nothing.
                                </AppText>
                            </View>

                            <View>
                                <AppText className="text-accent text-xl font-black mb-2">2. Discuss</AppText>
                                <AppText className="text-text-secondary text-lg leading-relaxed">
                                    Players take turns saying one word related to the secret word. Be subtle!
                                </AppText>
                            </View>

                            <View>
                                <AppText className="text-accent text-xl font-black mb-2">3. Eliminate</AppText>
                                <AppText className="text-text-secondary text-lg leading-relaxed">
                                    After discussion, vote to eliminate who you think is the Impostor.
                                </AppText>
                            </View>

                            <View>
                                <AppText className="text-accent text-xl font-black mb-2">4. Win</AppText>
                                <AppText className="text-text-secondary text-lg leading-relaxed">
                                    Civilians win if they eliminate the Impostor. Impostor wins if they survive or guess the secret word.
                                </AppText>
                            </View>
                        </View>
                    </View>
                </View>
            </Modal>
        </ScreenWrapper>
    );
}
