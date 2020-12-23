import React from 'react';
import SvgLogo from '../assets/SvgLogo';

export default function IndexPage() {
  return (
    <div className="h-screen">

      <div className="h-20">
        <SvgLogo />
      </div>
      <div>
        <div className="w-3/4" />
        <div className="w-1/4" />
      </div>

    </div>
  );
}
