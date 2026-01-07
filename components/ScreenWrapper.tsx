import { ScrollView, StyleProp, View, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface ScreenWrapperProps {
    children: React.ReactNode;
    scroll?: boolean;
    className?: string;
    contentContainerStyle?: StyleProp<ViewStyle>;
}

export default function ScreenWrapper({ children, scroll = false, className, contentContainerStyle }: ScreenWrapperProps) {
    // We use bg-background from tailwind config
    return (
        <SafeAreaView className={`flex-1 bg-background ${className || ''}`} edges={['top', 'bottom']}>
            {scroll ? (
                <ScrollView
                    className="flex-1 px-6"
                    contentContainerStyle={[{ flexGrow: 1, paddingBottom: 40 }, contentContainerStyle]}
                    showsVerticalScrollIndicator={false}
                >
                    {children}
                </ScrollView>
            ) : (
                <View className="flex-1 px-6" style={contentContainerStyle}>
                    {children}
                </View>
            )}
        </SafeAreaView>
    );
}
