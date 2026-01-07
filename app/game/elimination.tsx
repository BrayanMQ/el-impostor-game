import { useRouter } from 'expo-router';
import { CheckCircle, EyeOff, User, XCircle } from 'lucide-react-native';
import { useEffect, useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function EliminationResult() {
    const { players, eliminatedPlayerId, checkVictoryAfterElimination, impostorGuess, nextRound, winner, secretWord } = useGameStore();
    const router = useRouter();
    const [guess, setGuess] = useState('');
    const [guessSubmitted, setGuessSubmitted] = useState(false);

    const eliminatedPlayer = players.find(p => p.id === eliminatedPlayerId);

    useEffect(() => {
        if (eliminatedPlayer?.role === 'civilian') {
            checkVictoryAfterElimination();
        }
    }, []);

    const handleGuess = () => {
        if (!guess.trim()) return;
        setGuessSubmitted(true);
        const correct = impostorGuess(guess);
        if (!correct) {
            checkVictoryAfterElimination();
        }
    };

    const handleContinue = () => {
        if (winner) {
            router.replace('/game/victory');
        } else {
            nextRound();
            router.replace('/game/round-start');
        }
    };

    if (!eliminatedPlayer) return <View />;

    return (
        <ScreenWrapper className="justify-center items-center">
            <AppText variant="sub" className="mb-4 uppercase tracking-widest">Eliminated</AppText>
            <AppText variant="h1" className="mb-8 font-bold text-4xl">{eliminatedPlayer.name}</AppText>

            <View className="bg-surface-card p-8 rounded-3xl items-center w-full mb-8 border border-surface-soft shadow-xl">
                <AppText className="text-muted mb-4 uppercase">Role</AppText>
                {eliminatedPlayer.role === 'impostor' ? (
                    <>
                        <View className="mb-4">
                            <EyeOff size={80} color="#E5533D" />
                        </View>
                        <AppText variant="h1" className="text-primary-action text-3xl">IMPOSTOR</AppText>
                    </>
                ) : (
                    <>
                        <View className="mb-4">
                            <User size={80} color="#4CC9F0" />
                        </View>
                        <AppText variant="h1" className="text-accent text-3xl">CIVILIAN</AppText>
                    </>
                )}
            </View>

            {/* Impostor Last Chance */}
            {eliminatedPlayer.role === 'impostor' && !winner && !guessSubmitted && (
                <View className="w-full mb-8">
                    <AppText className="text-center text-primary-action font-bold mb-2">FINAL CHANCE</AppText>
                    <AppText className="text-center text-text-secondary mb-4">Guess the secret word to win instantly.</AppText>
                    <View className="flex-row gap-2">
                        <TextInput
                            className="flex-1 bg-surface-card text-white p-4 rounded-xl border border-surface-soft"
                            placeholder="Secret Word?"
                            placeholderTextColor="#7C8AA5"
                            value={guess}
                            onChangeText={setGuess}
                        />
                        <Button title="Guess" onPress={handleGuess} className="w-24" disabled={!guess.trim()} />
                    </View>
                </View>
            )}

            {guessSubmitted && !winner && (
                <View className="mb-8 items-center bg-surface-soft p-4 rounded-xl w-full">
                    <View className="mb-2">
                        <XCircle color="#E5533D" size={32} />
                    </View>
                    <AppText className="text-primary-action font-bold">Incorrect Guess</AppText>
                    <AppText className="text-white mt-1">The game continues...</AppText>
                </View>
            )}

            {(winner === 'impostor' && guessSubmitted) && (
                <View className="mb-8 items-center bg-surface-soft p-4 rounded-xl w-full">
                    <View className="mb-2">
                        <CheckCircle color="#4CC9F0" size={32} />
                    </View>
                    <AppText className="text-accent font-bold">Correct Guess!</AppText>
                    <AppText className="text-white mt-1">Impostors Win.</AppText>
                </View>
            )}

            <Button
                title={winner ? "See Results" : "Next Round"}
                onPress={handleContinue}
                className="w-full"
                variant={winner ? 'primary' : 'secondary'}
            />
        </ScreenWrapper>
    );
}
