import { Button as ShadCNButton, ButtonProps } from './button'; // Import ShadCN Button and its props
import { forwardRef } from 'react';

// Define the new props interface by extending the existing ButtonProps
interface CustomButtonProps extends Omit<ButtonProps, 'variant'> {
  isLoading?: boolean; // for a loading state
  variant?: 'primary' | 'secondary'; // Example custom variant
}

// Create a new custom button component
const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>((props, ref) => {
  const { isLoading, variant = 'primary', ...rest } = props;

  return (
    <ShadCNButton
      {...rest}
      ref={ref}
      // Add custom logic like showing a loader, styling based on the variant, etc.
      className={`${variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500'} ${props.className}`}
    >
      {isLoading ? 'Loading...' : props.children}
    </ShadCNButton>
  );
});

// Optional: Display the name for easier debugging
CustomButton.displayName = 'CustomButton';

export default CustomButton;
