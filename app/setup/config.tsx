import { useRouter } from 'expo-router';
import { Minus, Plus } from 'lucide-react-native';
import { TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function GameConfig() {
    const { players, settings, updateSettings } = useGameStore();
    const router = useRouter();

    const maxImpostors = Math.max(1, Math.floor(players.length / 2)); // Rule of thumb: max half are impostors

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
        <ScreenWrapper scroll>
            <AppText variant="h1" className="mb-2">Game Rules</AppText>
            <AppText variant="sub" className="mb-8">Configure game difficulty and balance</AppText>

            {/* Impostor Logic */}
            <View className="bg-surface-card p-5 rounded-2xl mb-6 border border-surface-soft">
                <AppText variant="h3" className="mb-4 text-primary-soft">Impostor Mode</AppText>

                <View className="flex-row mb-6 bg-surface-soft p-1 rounded-xl">
                    {['fixed', 'probability'].map((mode) => (
                        <TouchableOpacity
                            key={mode}
                            onPress={() => updateSettings({ impostorMode: mode as any })}
                            className={`flex-1 items-center py-3 rounded-lg ${settings.impostorMode === mode ? 'bg-primary shadow-sm' : ''}`}
                        >
                            <AppText className={settings.impostorMode === mode ? 'text-white font-bold' : 'text-muted'}>
                                {mode === 'fixed' ? 'Fixed Count' : 'Probability'}
                            </AppText>
                        </TouchableOpacity>
                    ))}
                </View>

                {settings.impostorMode === 'fixed' ? (
                    <View className="flex-row items-center justify-between bg-surface-soft p-4 rounded-xl">
                        <AppText className="font-semibold">Impostors</AppText>
                        <View className="flex-row items-center gap-4">
                            <TouchableOpacity onPress={decrementCount} className="bg-surface-card p-2 rounded-lg border border-muted">
                                <Minus color="white" size={20} />
                            </TouchableOpacity>
                            <AppText className="text-2xl font-bold w-8 text-center">{settings.impostorCount}</AppText>
                            <TouchableOpacity onPress={incrementCount} className="bg-surface-card p-2 rounded-lg border border-muted">
                                <Plus color="white" size={20} />
                            </TouchableOpacity>
                        </View>
                    </View>
                ) : (
                    <View className="gap-4">
                        <View className="flex-row items-center justify-between bg-surface-soft p-4 rounded-xl">
                            <AppText className="font-semibold">Target Count</AppText>
                            <View className="flex-row items-center gap-4">
                                <TouchableOpacity onPress={decrementCount} className="bg-surface-card p-2 rounded-lg border border-muted">
                                    <Minus color="white" size={20} />
                                </TouchableOpacity>
                                <AppText className="text-2xl font-bold w-8 text-center">{settings.impostorCount}</AppText>
                                <TouchableOpacity onPress={incrementCount} className="bg-surface-card p-2 rounded-lg border border-muted">
                                    <Plus color="white" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View className="flex-row items-center justify-between bg-surface-soft p-4 rounded-xl">
                            <AppText className="font-semibold">Chance</AppText>
                            <View className="flex-row items-center gap-4">
                                <TouchableOpacity onPress={decrementProb} className="bg-surface-card p-2 rounded-lg border border-muted">
                                    <Minus color="white" size={20} />
                                </TouchableOpacity>
                                <AppText className="text-2xl font-bold w-16 text-center">{settings.impostorProbability}%</AppText>
                                <TouchableOpacity onPress={incrementProb} className="bg-surface-card p-2 rounded-lg border border-muted">
                                    <Plus color="white" size={20} />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <AppText variant="sub" className="mt-2 leading-tight">
                            There is a {settings.impostorProbability}% chance there will be {settings.impostorCount} impostors. Otherwise, there will be 1.
                        </AppText>
                    </View>
                )}
            </View>

            <View className="bg-surface-card p-5 rounded-2xl mb-20 border border-surface-soft">
                <AppText variant="h3" className="mb-2 text-primary-soft">Turn Order</AppText>
                <AppText className="text-text-secondary leading-relaxed">
                    The app will automatically select a random starting player and speak direction (Left/Right) at the start of each round.
                </AppText>
            </View>

            <View className="absolute bottom-6 left-6 right-6">
                <Button title="Next" onPress={() => router.push('/setup/theme')} />
            </View>
        </ScreenWrapper>
    )
}
