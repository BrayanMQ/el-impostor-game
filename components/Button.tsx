import { ActivityIndicator, Text, TouchableOpacity, View } from 'react-native';

interface ButtonProps {
    onPress: () => void;
    title: string;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    disabled?: boolean;
    loading?: boolean;
    className?: string; // container extra styles
    textClassName?: string;
    icon?: React.ReactNode;
}

export function Button({ onPress, title, variant = 'primary', disabled, loading, className, textClassName, icon }: ButtonProps) {
    let bg = "bg-primary-action";
    let text = "text-white";
    let border = "";

    if (variant === 'secondary') {
        bg = "bg-surface-soft";
        text = "text-text-primary";
    } else if (variant === 'outline') {
        bg = "bg-transparent";
        border = "border-2 border-primary-action";
        text = "text-primary-action";
    } else if (variant === 'danger') {
        bg = "bg-red-600"; // fallback or specific
        text = "text-white";
    }

    if (disabled) {
        bg = "bg-muted";
        text = "text-gray-300";
        border = "border-muted";
    }

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            activeOpacity={0.8}
            className={`h-14 rounded-2xl flex-row items-center justify-center shadow-lg ${bg} ${border} ${className || ''}`}
        >
            {loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <>
                    {icon && <View className="mr-2">{icon}</View>}
                    <Text className={`text-lg font-bold ${text} ${textClassName || ''}`}>{title}</Text>
                </>
            )}
        </TouchableOpacity>
    );
}
