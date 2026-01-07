import { useRouter } from 'expo-router';
import { Trophy } from 'lucide-react-native';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function VictoryScreen() {
    const { winner, secretWord, resetGame } = useGameStore();
    const router = useRouter();

    if (!winner) {
        // Fallback if accessed directly
        return (
            <ScreenWrapper className="justify-center items-center">
                <Button title="Home" onPress={() => router.replace('/')} />
            </ScreenWrapper>
        )
    }

    const handlePlayAgain = () => {
        resetGame();
        router.replace('/setup/config');
    };

    const handleQuit = () => {
        resetGame();
        router.replace('/');
    };

    return (
        <ScreenWrapper className="justify-center items-center bg-background">
            <View className="items-center mb-12">
                <Trophy size={100} color={winner === 'civilian' ? '#4CC9F0' : '#E5533D'} className="mb-8" />

                <AppText variant="sub" className="uppercase tracking-widest mb-2">Winner</AppText>
                <AppText variant="h1" className={`text-6xl mb-4 text-center ${winner === 'civilian' ? 'text-accent' : 'text-primary-action'}`}>
                    {winner === 'civilian' ? 'CIVILIANS' : 'IMPOSTORS'}
                </AppText>

                <AppText className="text-text-secondary text-center">
                    {winner === 'civilian'
                        ? 'All impostors have been eliminated.'
                        : 'The impostors have taken over.'}
                </AppText>
            </View>

            <View className="bg-surface-card p-8 rounded-3xl items-center w-full mb-12 border border-surface-soft">
                <AppText className="text-muted mb-2 uppercase tracking-wide">The Word Was</AppText>
                <AppText variant="h1" className="text-white text-4xl">{secretWord}</AppText>
            </View>

            <View className="w-full gap-4">
                <Button title="Play Again (Same Players)" onPress={handlePlayAgain} />
                <Button title="New Game" variant="secondary" onPress={handleQuit} />
            </View>
        </ScreenWrapper>
    );
}
