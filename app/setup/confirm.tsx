import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function ConfirmGame() {
    const { players, settings, startGame } = useGameStore();
    const router = useRouter();

    const handleStart = () => {
        startGame();
        router.replace('/game/reveal');
    };

    const InfoRow = ({ label, value }: { label: string, value: string }) => (
        <View className="flex-row justify-between mb-4 border-b border-surface-soft pb-2">
            <AppText className="text-text-secondary">{label}</AppText>
            <AppText className="font-bold text-white">{value}</AppText>
        </View>
    );

    return (
        <ScreenWrapper>
            <AppText variant="h1" className="mb-8">Ready?</AppText>

            <View className="bg-surface-card p-6 rounded-2xl border border-surface-soft mb-8">
                <InfoRow label="Players" value={players.length.toString()} />
                <InfoRow label="Impostor Mode" value={settings.impostorMode === 'fixed' ? 'Fixed' : 'Probability'} />
                <InfoRow
                    label="Impostor Count"
                    value={settings.impostorMode === 'fixed'
                        ? settings.impostorCount.toString()
                        : `~${settings.impostorCount} (${settings.impostorProbability}%)`}
                />
                <InfoRow label="Theme" value={settings.theme} />
                {settings.theme === 'Custom' && (
                    <InfoRow label="Pool Size" value={settings.customWords.length.toString()} />
                )}
            </View>

            <AppText className="text-center text-text-secondary italic mb-8">
                Pass the phone to the first player now.
            </AppText>

            <Button title="Start Game" onPress={handleStart} className="mt-auto mb-6" />
        </ScreenWrapper>
    );
}
