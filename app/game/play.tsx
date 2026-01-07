import { useRouter } from 'expo-router';
import { MessageSquare } from 'lucide-react-native';
import { View } from 'react-native';
import { Button } from '../../components/Button';
import ScreenWrapper from '../../components/ScreenWrapper';
import { AppText } from '../../components/Typography';

export default function PlayRound() {
    const router = useRouter();

    return (
        <ScreenWrapper className="justify-center items-center bg-background">
            <View className="items-center mb-16 px-4">
                <View className="bg-surface-soft p-6 rounded-full mb-8">
                    <MessageSquare size={64} color="#4CC9F0" />
                </View>

                <AppText variant="h1" className="text-center mb-4">Players Speaking</AppText>
                <AppText variant="body" className="text-center text-text-secondary">
                    Take turns saying one word related to the secret word.
                </AppText>
                <AppText variant="body" className="text-center text-text-secondary mt-2">
                    Listen carefully.
                </AppText>
            </View>

            <Button
                title="Time to Vote"
                variant="primary"
                onPress={() => router.replace('/game/vote')}
                className="w-full"
            />
        </ScreenWrapper>
    )
}
