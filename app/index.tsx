import { useRouter } from 'expo-router';
import { View } from 'react-native';
import { Button } from '../components/Button';
import ScreenWrapper from '../components/ScreenWrapper';
import { AppText } from '../components/Typography';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScreenWrapper className="justify-center items-center">
            <View className="flex-1 justify-center items-center w-full">
                <AppText variant="h1" className="text-5xl text-primary-action mb-4 text-center">
                    El Impostor
                </AppText>
                <AppText variant="h3" className="text-text-secondary text-center mb-12">
                    Find who doesn’t know the word
                </AppText>

                <View className="w-full gap-4 max-w-sm">
                    <Button
                        title="Play"
                        onPress={() => router.push('/setup/players')}
                        className="w-full"
                    />
                    <Button
                        title="How to Play"
                        variant="secondary"
                        onPress={() => router.push('/how-to-play')}
                        className="w-full"
                    />
                </View>
            </View>

            <View className="absolute top-12 right-6">
                {/* Settings icon placeholder or actual button */}
            </View>
        </ScreenWrapper>
    );
}
