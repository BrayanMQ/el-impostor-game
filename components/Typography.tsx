import { Text, TextProps } from 'react-native';

interface AppTextProps extends TextProps {
    variant?: 'h1' | 'h2' | 'h3' | 'body' | 'label' | 'sub';
    color?: string;
    className?: string;
}

export function AppText({ className, variant = 'body', style, ...props }: AppTextProps) {
    let baseStyle = "text-text-primary font-sans";

    switch (variant) {
        case 'h1':
            baseStyle += " text-4xl font-bold tracking-tight mb-4";
            break;
        case 'h2':
            baseStyle += " text-2xl font-semibold mb-3";
            break;
        case 'h3':
            baseStyle += " text-xl font-medium mb-2";
            break;
        case 'body':
            baseStyle += " text-lg leading-relaxed";
            break;
        case 'label':
            baseStyle += " text-base font-medium text-text-secondary";
            break;
        case 'sub':
            baseStyle += " text-sm text-text-secondary";
            break;
    }

    return <Text className={`${baseStyle} ${className || ''}`} style={style} {...props} />;
}
