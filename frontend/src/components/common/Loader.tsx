import { Triangle } from 'react-loader-spinner';

interface LoaderProps {
  size: string;
  wrapperClass?: string;
}

export const Loader = ({ size, wrapperClass }: LoaderProps) => {
  return (
    <Triangle
      visible={true}
      height={size}
      width={size}
      color="#8056eb"
      wrapperClass={wrapperClass}
      ariaLabel="triangle-loading"
    />
  );
};
