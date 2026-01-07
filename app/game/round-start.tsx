import { useRouter } from 'expo-router';
import { ArrowLeft, ArrowRight } from 'lucide-react-native';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function RoundStart() {
    const { players, starterPlayerId, direction } = useGameStore();
    const router = useRouter();

    const starter = players.find(p => p.id === starterPlayerId);

    return (
        <ScreenWrapper className="justify-center items-center">
            <AppText variant="h3" className="text-muted mb-4 uppercase tracking-widest text-center">Round Start</AppText>

            <View className="bg-surface-card p-8 rounded-3xl items-center w-full mb-16 border border-surface-soft shadow-lg">
                <AppText className="text-muted mb-2 uppercase tracking-wide">Starting Player</AppText>
                <AppText variant="h1" className="text-primary-action text-center mb-10">{starter?.name}</AppText>

                <View className="h-[1px] bg-surface-soft w-full mb-10" />

                <AppText className="text-muted mb-4 uppercase tracking-wide">Direction</AppText>
                <View className="flex-row items-center bg-surface-soft px-8 py-3 rounded-full">
                    {direction === 'Left' && <ArrowLeft size={28} color="white" style={{ marginRight: 10 }} />}
                    <AppText className="text-white text-3xl font-bold">{direction}</AppText>
                    {direction === 'Right' && <ArrowRight size={28} color="white" style={{ marginLeft: 10 }} />}
                </View>
            </View>

            <Button title="Start Round" onPress={() => router.replace('/game/play')} className="w-full" />
        </ScreenWrapper>
    )
}
