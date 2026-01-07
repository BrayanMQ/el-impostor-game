import { useRouter } from 'expo-router';
import { EyeOff, Fingerprint, User } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function RevealScreen() {
    const { players, secretWord } = useGameStore();
    const [index, setIndex] = useState(0);
    const currentPlayer = players[index];
    const router = useRouter();

    const rotate = useSharedValue(0);

    const frontStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: `${rotate.value}deg` }],
            opacity: interpolate(rotate.value, [85, 95], [1, 0]),
            backfaceVisibility: 'hidden',
        };
    });

    const backStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateY: `${rotate.value + 180}deg` }],
            opacity: interpolate(rotate.value, [85, 95], [0, 1]),
            backfaceVisibility: 'hidden',
        };
    });

    const handlePressIn = () => {
        rotate.value = withTiming(180, { duration: 600 });
    };

    const handlePressOut = () => {
        rotate.value = withTiming(0, { duration: 400 });
    };

    const handleNext = () => {
        if (index < players.length - 1) {
            setIndex(index + 1);
            rotate.value = 0;
        } else {
            router.replace('/game/round-start');
        }
    };

    if (!currentPlayer) return null;

    return (
        <ScreenWrapper className="justify-center items-center">
            <AppText variant="h3" className="text-center mb-4 text-muted">
                Player {index + 1} of {players.length}
            </AppText>

            <AppText variant="h1" className="mb-8">{currentPlayer.name}</AppText>

            <View className="mb-10 w-full items-center">
                <Pressable
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    className="w-72 h-96 sm:w-80 sm:h-[400px]"
                >
                    {/* Front Face (Hidden) */}
                    <Animated.View style={[styles.cardFace, frontStyle]} className="bg-surface-card border-2 border-surface-soft items-center justify-center rounded-3xl shadow-2xl">
                        <View className="mb-4 opacity-80">
                            <Fingerprint size={80} color="#4CC9F0" />
                        </View>
                        <AppText className="text-accent font-bold text-xl uppercase tracking-widest">Hold to Reveal</AppText>
                    </Animated.View>

                    {/* Back Face (Revealed) */}
                    <Animated.View style={[styles.cardFace, backStyle]} className={`items-center justify-center rounded-3xl shadow-2xl border-2 ${currentPlayer.role === 'impostor' ? 'bg-surface-card border-primary' : 'bg-surface-card border-accent'}`}>
                        {currentPlayer.role === 'impostor' ? (
                            <>
                                <View className="mb-6">
                                    <EyeOff size={60} color="#E5533D" />
                                </View>
                                <AppText className="text-primary font-bold text-2xl uppercase tracking-widest text-center mb-2">Impostor</AppText>
                                <AppText className="text-center px-4 text-text-secondary">Blend in. Don't let them know you don't know the word.</AppText>
                            </>
                        ) : (
                            <>
                                <View className="mb-6">
                                    <User size={60} color="#4CC9F0" />
                                </View>
                                <AppText className="text-accent font-bold text-lg uppercase tracking-widest mb-2">Secret Word</AppText>
                                <AppText className="text-white font-bold text-4xl text-center">{secretWord}</AppText>
                            </>
                        )}
                    </Animated.View>
                </Pressable>
            </View>

            <Button
                title={index < players.length - 1 ? "Next Player" : "Start Round"}
                onPress={handleNext}
                className="w-full max-w-sm"
            />
        </ScreenWrapper>
    );
}

const styles = StyleSheet.create({
    cardFace: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backfaceVisibility: 'hidden',
    },
});
