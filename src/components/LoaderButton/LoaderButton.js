import React from 'react';

import { Button } from 'primereact/button';

function LoaderButton({ label, isLoading, className = '', disabled = false, ...props }) {
  return (
    <Button
      label={label}
      icon={isLoading ? 'pi pi-spin pi-spinner' : ''}
      iconPos="right"
      disabled={disabled || isLoading}
      {...props}
    >
      {props.children}
    </Button>
  );
}

export default LoaderButton;
