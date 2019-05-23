/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagTN(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="TNa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="TNb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E92434" />
          <stop offset="100%" stopColor="#E11324" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#TNa)" d="M0 0h21v15H0z" />
        <path fill="url(#TNb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#TNa)"
          d="M11.858 4.273a3.5 3.5 0 1 0 0 6.453 3.25 3.25 0 0 1 0-6.453zM10.5 12a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm1.766-3.622l1.352.505-.775-1.218.898-1.13-1.398.361-.797-1.204-.088 1.441-1.391.386 1.343.53-.063 1.442.919-1.113z"
        />
      </g>
    </svg>
  );
}