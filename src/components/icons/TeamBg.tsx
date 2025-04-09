import { useId } from 'react';

interface TeamBgProps {
  imgLink: string;
}

export const TeamBg = ({ imgLink, ...props }: TeamBgProps) => {
  // Generate unique ID prefix for this component instance
  const id = useId();
  const maskId = `mask-${id}`;
  const patternId = `pattern-${id}`;
  const imageId = `image-${id}`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 106 103"
      fill="none"
      {...props}
    >
      <path
        fill="#231F20"
        d="M91.631 53.912c32.842 37.41 2.514 67.737-34.895 34.895-37.41 32.842-67.738 2.514-34.895-34.895-32.843-37.41-2.515-67.738 34.895-34.895 37.41-32.843 67.737-2.515 34.895 34.895"
      />
      <mask
        id={maskId}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "alpha",
        }}
      >
        <path
          fill="#231F20"
          d="M83.807 48.912c32.842 37.41 2.514 67.737-34.895 34.895-37.41 32.842-67.738 2.514-34.895-34.895-32.843-37.41-2.515-67.738 34.895-34.895 37.41-32.843 67.737-2.515 34.895 34.895"
        />
      </mask>
      <g mask={`url(#${maskId})`} >
        <path fill={`url(#${patternId})`} d="M0 0h106v103H0z" />
        <path
          fill="#B9FF66"
          d="M0 0h106v103H0z"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </g>
      <defs>
        <pattern
          id={patternId}
          width={1}
          height={1}
          patternContentUnits="objectBoundingBox"
        >
          <use
            xlinkHref={`#${imageId}`}
            transform="matrix(.00038 0 0 .00025 -.002 0)"
          />
        </pattern>
        <image
          id={imageId}
          width={2662}
          height={3993}
          href={imgLink}
          preserveAspectRatio="none"
        />
      </defs>
    </svg>
  );
};
