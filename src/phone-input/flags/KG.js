/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagKG(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="KGa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="KGb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#F22A46" />
          <stop offset="100%" stopColor="#E71834" />
        </linearGradient>
        <linearGradient id="KGc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF04D" />
          <stop offset="100%" stopColor="#FFEE35" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#KGa)" d="M0 0h21v15H0z" />
        <path fill="url(#KGb)" d="M0 0h21v15H0z" />
        <circle cx="10.5" cy="7.5" r="2.5" fill="url(#KGc)" />
        <path
          fill="url(#KGc)"
          d="M10.5 11.035l-1.224 1.827-.31-2.177L7.071 11.8l.665-2.096-2.191.182 1.508-1.6L5 7.5l2.053-.787-1.508-1.6 2.191.183L7.071 3.2l1.895 1.115.31-2.177L10.5 3.965l1.224-1.827.31 2.177L13.929 3.2l-.665 2.096 2.191-.182-1.508 1.6L16 7.5l-2.053.787 1.508 1.6-2.191-.183.665 2.096-1.895-1.115-.31 2.177-1.224-1.827zm0-.035a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
        />
      </g>
    </svg>
  );
}