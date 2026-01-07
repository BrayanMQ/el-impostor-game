import { useRouter } from 'expo-router';
import { GripVertical, Plus, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { useGameStore } from '../../store/gameStore';

export default function AddPlayers() {
    const router = useRouter();
    const { players, addPlayer, removePlayer, reorderPlayers } = useGameStore();
    const [name, setName] = useState('');

    const handleAdd = () => {
        if (name.trim()) {
            addPlayer(name.trim());
            setName('');
        }
    };

    return (
        <ScreenWrapper>
            <View className="mb-6">
                <AppText variant="h1">Players</AppText>
                <AppText variant="sub">Add players and arrange turn order</AppText>
            </View>

            <View className="flex-row mb-6 gap-2">
                <TextInput
                    className="flex-1 bg-surface-card text-white p-4 rounded-xl text-lg border border-surface-soft font-sans"
                    placeholder="Player Name"
                    placeholderTextColor="#7C8AA5"
                    value={name}
                    onChangeText={setName}
                    onSubmitEditing={handleAdd}
                />
                <TouchableOpacity
                    onPress={handleAdd}
                    className="bg-primary aspect-square rounded-xl items-center justify-center"
                    activeOpacity={0.7}
                >
                    <Plus color="white" size={24} />
                </TouchableOpacity>
            </View>

            <DraggableFlatList
                data={players}
                keyExtractor={item => item.id}
                onDragEnd={({ data }) => reorderPlayers(data)}
                renderItem={({ item, drag, isActive }) => (
                    <ScaleDecorator>
                        <TouchableOpacity
                            onLongPress={drag}
                            disabled={isActive}
                            activeOpacity={1}
                            className={`flex-row items-center p-4 mb-3 rounded-xl border ${isActive ? 'bg-surface-soft border-primary' : 'bg-surface-card border-surface-soft'
                                }`}
                        >
                            <View className="mr-3 opacity-50 p-1">
                                <GripVertical color="#7C8AA5" size={20} />
                            </View>
                            <AppText className="flex-1 font-semibold text-white">{item.name}</AppText>
                            <TouchableOpacity
                                onPress={() => removePlayer(item.id)}
                                className="p-2"
                                activeOpacity={0.6}
                            >
                                <Trash2 color="#E5533D" size={20} />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </ScaleDecorator>
                )}
                contentContainerStyle={{ paddingBottom: 100 }}
                showsVerticalScrollIndicator={false}
            />

            <View className="absolute bottom-6 left-6 right-6">
                <Button
                    title={`Next (${players.length})`}
                    disabled={players.length < 3}
                    onPress={() => router.push('/setup/config')}
                />
                {players.length < 3 && (
                    <AppText variant="sub" className="text-center mt-2 text-red-400">
                        Minimum 3 players required
                    </AppText>
                )}
            </View>
        </ScreenWrapper>
    );
}
