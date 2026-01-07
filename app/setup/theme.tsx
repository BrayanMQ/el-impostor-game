import { useRouter } from 'expo-router';
import { Check, Plus, Trash2 } from 'lucide-react-native';
import { useState } from 'react';
import { FlatList, TextInput, TouchableOpacity, View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';
import { PREDEFINED_THEMES, ThemeKey } from '../../constants/Themes';
import { useGameStore } from '../../store/gameStore';

export default function ThemeSelection() {
    const router = useRouter();
    const { settings, updateSettings, addCustomWord, removeCustomWord } = useGameStore();
    const [customInput, setCustomInput] = useState('');

    const themes = [...Object.keys(PREDEFINED_THEMES), 'Custom'];

    const handleAddWord = () => {
        if (customInput.trim()) {
            addCustomWord(customInput.trim());
            setCustomInput('');
        }
    };

    const renderCustomEditor = () => (
        <View className="mt-4 bg-surface-soft p-4 rounded-xl">
            <View className="flex-row gap-2 mb-4">
                <TextInput
                    className="flex-1 bg-background p-3 rounded-lg text-white border border-muted"
                    placeholder="Add secret word..."
                    placeholderTextColor="#7C8AA5"
                    value={customInput}
                    onChangeText={setCustomInput}
                    onSubmitEditing={handleAddWord}
                />
                <TouchableOpacity onPress={handleAddWord} className="bg-primary items-center justify-center w-12 rounded-lg">
                    <Plus color="white" />
                </TouchableOpacity>
            </View>

            {settings.customWords.length === 0 ? (
                <AppText variant="sub" className="text-center italic">Add at least one word</AppText>
            ) : (
                <View className="flex-row flex-wrap gap-2">
                    {settings.customWords.map((word, idx) => (
                        <View key={idx} className="bg-background px-3 py-1 rounded-full flex-row items-center border border-muted">
                            <AppText className="mr-2 text-sm">{word}</AppText>
                            <TouchableOpacity onPress={() => removeCustomWord(word)}>
                                <Trash2 size={14} color="#E5533D" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            )}
        </View>
    );

    return (
        <ScreenWrapper>
            <AppText variant="h1" className="mb-2">Theme</AppText>
            <AppText variant="sub" className="mb-6">Select a category for secret words</AppText>

            <FlatList
                data={themes}
                keyExtractor={item => item}
                renderItem={({ item }) => {
                    const isSelected = settings.theme === item;
                    return (
                        <TouchableOpacity
                            onPress={() => updateSettings({ theme: item as ThemeKey })}
                            className={`flex-row items-center justify-between p-4 mb-3 rounded-xl border ${isSelected ? 'bg-surface-soft border-primary-action' : 'bg-surface-card border-surface-soft'}`}
                        >
                            <AppText className={`text-lg ${isSelected ? 'font-bold text-white' : 'text-gray-300'}`}>{item}</AppText>
                            {isSelected && <Check color="#E5533D" size={20} />}
                        </TouchableOpacity>
                    );
                }}
                ListFooterComponent={settings.theme === 'Custom' ? renderCustomEditor() : null}
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <View className="absolute bottom-6 left-6 right-6">
                <Button
                    title="Confirm & Start"
                    disabled={settings.theme === 'Custom' && settings.customWords.length === 0}
                    onPress={() => router.push('/setup/confirm')}
                />
            </View>
        </ScreenWrapper>
    );
}
