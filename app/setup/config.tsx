import { useRouter } from 'expo-router';
import { ArrowRight, Info, Minus, Plus } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';
import { useSettingsStore } from '../../store/settingsStore';

export default function GameConfig() {
    const { players, settings, updateSettings } = useGameStore();
    const { appTheme } = useSettingsStore();
    const isDark = appTheme === 'dark';
    const router = useRouter();

    const maxImpostors = Math.max(1, Math.floor(players.length / 2));

    const incrementCount = () => {
        if (settings.impostorCount < maxImpostors) {
            updateSettings({ impostorCount: settings.impostorCount + 1 });
        }
    };

    const decrementCount = () => {
        if (settings.impostorCount > 1) {
            updateSettings({ impostorCount: settings.impostorCount - 1 });
        }
    };

    const incrementProb = () => {
        if (settings.impostorProbability < 100) updateSettings({ impostorProbability: settings.impostorProbability + 10 });
    };

    const decrementProb = () => {
        if (settings.impostorProbability > 10) updateSettings({ impostorProbability: settings.impostorProbability - 10 });
    };

    return (
        <ScreenWrapper>
            <View className="flex-1">
                <View className="mb-4">
                    <AppText variant="h1" className="text-4xl font-black mb-1">Rules</AppText>
                    <AppText variant="body" className="text-text-secondary text-base">Configure the game difficulty</AppText>
                </View>

                {/* Impostors Section */}
                <View className="mb-4">
                    <AppText className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-[#101828]'}`}>Impostors</AppText>

                    <View className={`flex-row mb-4 ${isDark ? 'bg-surface-soft' : 'bg-gray-200'} p-1 rounded-2xl`}>
                        {['fixed', 'probability'].map((mode) => {
                            const isSelected = settings.impostorMode === mode;
                            return (
                                <TouchableOpacity
                                    key={mode}
                                    onPress={() => updateSettings({ impostorMode: mode as any })}
                                    className={`flex-1 items-center py-2.5 rounded-xl ${isSelected ? (isDark ? 'bg-[#2A3755] shadow-sm' : 'bg-white shadow-sm') : ''}`}
                                >
                                    <AppText className={`text-base font-bold ${isSelected ? (isDark ? 'text-white' : 'text-[#101828]') : (isDark ? 'text-[#7C8AA5]' : 'text-gray-500')}`}>
                                        {mode === 'fixed' ? 'Fixed' : 'Probability'}
                                    </AppText>
                                </TouchableOpacity>
                            );
                        })}
                    </View>

                    <View className={`${isDark ? 'bg-surface-card' : 'bg-white shadow-sm'} p-5 rounded-[28px] border ${isDark ? 'border-transparent' : 'border-gray-100'}`}>
                        {settings.impostorMode === 'fixed' ? (
                            <>
                                <AppText variant="label" className="text-xs uppercase tracking-widest mb-3 opacity-70">Number of Impostors</AppText>
                                <View className={`flex-row items-center justify-between ${isDark ? 'bg-[#121A2B]' : 'bg-gray-50'} p-2 rounded-2xl mb-3`}>
                                    <TouchableOpacity
                                        onPress={decrementCount}
                                        className={`${isDark ? 'bg-[#1F2A44]' : 'bg-gray-200'} w-11 h-11 rounded-xl items-center justify-center`}
                                    >
                                        <Minus color={isDark ? "white" : "#101828"} size={18} strokeWidth={3} />
                                    </TouchableOpacity>
                                    <AppText className="text-3xl font-black">{settings.impostorCount}</AppText>
                                    <TouchableOpacity
                                        onPress={incrementCount}
                                        className="bg-primary-action w-11 h-11 rounded-xl items-center justify-center"
                                    >
                                        <Plus color="white" size={18} strokeWidth={3} />
                                    </TouchableOpacity>
                                </View>
                                <AppText className="text-text-secondary text-xs">Exactly {settings.impostorCount} impostor{settings.impostorCount > 1 ? 's' : ''} in the game.</AppText>
                            </>
                        ) : (
                            <>
                                <AppText variant="label" className="text-[10px] uppercase tracking-widest mb-1 opacity-70">Probability & Target</AppText>
                                <AppText className="text-xl font-black mb-3">{settings.impostorProbability}% chance</AppText>

                                <View className="flex-row gap-2 mb-5">
                                    {[25, 50, 75].map((prob) => {
                                        const isSelected = settings.impostorProbability === prob;
                                        return (
                                            <TouchableOpacity
                                                key={prob}
                                                onPress={() => updateSettings({ impostorProbability: prob })}
                                                className={`flex-1 py-2 rounded-xl items-center border ${isSelected ? 'bg-primary-action border-primary-action' : (isDark ? 'bg-[#1F2A44] border-transparent' : 'bg-gray-100 border-transparent')}`}
                                            >
                                                <AppText className={`text-sm font-bold ${isSelected ? 'text-white' : (isDark ? 'text-[#7C8AA5]' : 'text-gray-500')}`}>{prob}%</AppText>
                                            </TouchableOpacity>
                                        );
                                    })}
                                </View>

                                <AppText variant="label" className="text-[10px] uppercase tracking-widest mb-2 opacity-70">If probability hits:</AppText>
                                <View className={`flex-row items-center justify-between ${isDark ? 'bg-[#121A2B]' : 'bg-gray-50'} p-2 rounded-2xl mb-2`}>
                                    <TouchableOpacity
                                        onPress={decrementCount}
                                        className={`${isDark ? 'bg-[#1F2A44]' : 'bg-gray-200'} w-11 h-11 rounded-xl items-center justify-center`}
                                    >
                                        <Minus color={isDark ? "white" : "#101828"} size={18} strokeWidth={3} />
                                    </TouchableOpacity>
                                    <AppText className="text-3xl font-black">{settings.impostorCount}</AppText>
                                    <TouchableOpacity
                                        onPress={incrementCount}
                                        className={`${isDark ? 'bg-primary-action' : 'bg-primary-action'} w-11 h-11 rounded-xl items-center justify-center`}
                                    >
                                        <Plus color="white" size={18} strokeWidth={3} />
                                    </TouchableOpacity>
                                </View>
                                <AppText className="text-text-secondary text-xs text-center italic">Otherwise, there will be 1 impostor.</AppText>
                            </>
                        )}
                    </View>
                </View>

                {/* Turn Order Section */}
                <View className="mb-4">
                    <AppText className={`text-lg font-bold mb-3 ${isDark ? 'text-white' : 'text-[#101828]'}`}>Turn Order</AppText>
                    <View className={`${isDark ? 'bg-surface-card' : 'bg-white shadow-sm'} p-4 rounded-[24px] border ${isDark ? 'border-transparent' : 'border-gray-100'} flex-row items-center`}>
                        <View className="bg-primary-action/10 p-2 rounded-full mr-3">
                            <Info size={16} color="#E5533D" />
                        </View>
                        <AppText className="flex-1 text-text-secondary leading-tight text-sm">
                            Random starting player and direction select for each round.
                        </AppText>
                    </View>
                </View>
            </View>

            <View className="pb-6">
                <Button
                    title="Next"
                    onPress={() => router.push('/setup/theme')}
                    icon={<ArrowRight size={22} color="white" />}
                    iconPosition="right"
                />
            </View>
        </ScreenWrapper>
    );
}
