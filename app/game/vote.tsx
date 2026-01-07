import { useRouter } from 'expo-router';
import { CheckCircle2, User } from 'lucide-react-native';
import { useState } from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function VoteScreen() {
    const { players, voteToEliminate } = useGameStore();
    const router = useRouter();
    const [selectedId, setSelectedId] = useState<string | null>(null);

    const alivePlayers = players.filter(p => p.isAlive);

    const handleConfirm = () => {
        if (selectedId) {
            voteToEliminate(selectedId);
            router.replace('/game/elimination');
        }
    };

    return (
        <ScreenWrapper>
            <AppText variant="h1" className="text-center mb-2">Vote</AppText>
            <AppText variant="sub" className="text-center mb-8">Discuss and select one player to eliminate.</AppText>

            <FlatList
                data={alivePlayers}
                keyExtractor={item => item.id}
                renderItem={({ item }) => {
                    const isSelected = selectedId === item.id;
                    return (
                        <TouchableOpacity
                            onPress={() => setSelectedId(item.id)}
                            className={`flex-row items-center p-4 mb-3 rounded-xl border ${isSelected ? 'bg-surface-soft border-primary' : 'bg-surface-card border-surface-soft'}`}
                        >
                            <View className="bg-surface-soft w-10 h-10 rounded-full items-center justify-center mr-4">
                                <User size={20} color="#B6C2E2" />
                            </View>
                            <AppText className={`text-lg flex-1 ${isSelected ? 'font-bold text-white' : 'text-gray-300'}`}>{item.name}</AppText>
                            {isSelected && <CheckCircle2 color="#E5533D" size={24} />}
                        </TouchableOpacity>
                    );
                }}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <View className="absolute bottom-6 left-6 right-6">
                <Button
                    title="Eliminate"
                    variant="danger"
                    disabled={!selectedId}
                    onPress={handleConfirm}
                />
            </View>
        </ScreenWrapper>
    );
}
