import { useId } from "react";

export const LOGO_VIEWBOX = { width: 378, height: 268 };

type GradientStop = [offset: number, color: string, opacity?: number];

export type LogoGradient =
  | { type: "linear"; x1: number; y1: number; x2: number; y2: number; stops: GradientStop[] }
  // matrix(a b c d e f) that maps the unit circle at the origin onto the gradient ellipse.
  | { type: "radial"; transform: [number, number, number, number, number, number]; stops: GradientStop[] };

// Each shape is painted with its fills in order: an opaque base gradient followed by translucent shading layers.
export const LOGO_SHAPES: { d: string; fills: LogoGradient[] }[] = [
  {
    d: "M17.3678 53.4423C35.026 50.3962 50.8228 51.6931 63.7982 57.6586C74.9755 62.7965 84.0638 70.8269 90.4526 85.1866C106.761 125.698 123.071 166.209 139.379 206.719C143.366 216.623 150.115 227.616 160.978 230.916C166.939 232.725 172.833 230.938 178.657 225.38C171.381 240.85 162.066 252.34 150.243 258.938C105.076 284.148 76.5144 242.795 60.4017 206.167C40.7217 161.447 21.0408 116.726 1.36075 72.0077C-4.09013 59.6218 7.97611 55.0618 17.3668 53.4423H17.3678Z",
    fills: [
      { type: "radial", transform: [113.56, 0, -18.1696, 106.754, 87.4959, 142.082], stops: [[0, "#0065DE"], [0.360784, "#079EEB"], [0.74902, "#15C7F5"], [1, "#4AF2FA"]] },
      { type: "radial", transform: [63.8187, 0, 0, 59.9939, 114.343, 146.372], stops: [[0, "#0342AB", 0.521569], [0.478431, "#0450BB", 0.25098], [1, "#0450BB", 0]] },
      { type: "radial", transform: [53.9641, 0, 0, 50.7296, 107.165, 215.135], stops: [[0, "#16EDFC", 0.6], [0.54902, "#0CD9F9", 0.2], [1, "#0CD9F9", 0]] },
      { type: "radial", transform: [42.7025, 0, 0, 40.1431, 125.105, 174.291], stops: [[0, "#07327D", 0.431373], [0.341176, "#0756AA", 0.258824], [0.780392, "#0C75BC", 0.0509804], [1, "#0C75BC", 0]] },
    ],
  },
  {
    d: "M125.978 148.376C136.413 127.507 153.1 101.561 178.138 98.2051C206.12 94.4554 225.961 113.2 237.13 136.709C253.689 171.565 272.266 210.425 288.828 245.281C290.892 249.624 291.983 253.303 289.641 258.041C286.664 264.064 278.628 266.561 268.917 267.891C261.366 267.891 253.817 267.891 246.267 267.891C238.664 267.461 231.76 264.842 225.529 260.123C218.233 254.598 211.186 245.249 207.461 236.897C195.724 210.576 183.983 184.255 172.248 157.933C161.768 134.428 143.461 121.085 125.98 148.375L125.978 148.376Z",
    fills: [
      { type: "linear", x1: 159.919, y1: 104.926, x2: 260.099, y2: 279.178, stops: [[0, "#BCE2FF"], [0.34902, "#869DF4"], [0.690196, "#5653E9"], [1, "#BA4BED"]] },
      { type: "radial", transform: [63.9237, 0, 0, 63.1068, 170.503, 102.828], stops: [[0, "#E7F8FF", 0.239216], [0.501961, "#D5EDFF", 0.101961], [1, "#D5EDFF", 0]] },
    ],
  },
  {
    d: "M225.004 117.616C237.793 87.385 250.721 57.4022 265.987 31.6282C271.996 21.4771 278.893 13.152 289.339 7.24129C297.427 2.66497 306.742 0.2112 317.352 0C334.99 0 352.626 0 370.263 0C372.437 0 375.533 0.451211 376.654 2.56705C377.405 3.98305 377.063 5.93569 375.697 8.39328C369.098 17.8512 362.94 27.4944 357.151 37.2931C350.458 48.6221 344.258 60.1594 338.438 71.856C318.159 115.74 297.881 159.625 277.602 203.509L272.588 211.164C260.683 186.179 248.435 160.511 237.128 136.71C233.836 129.78 229.79 123.265 225.003 117.616H225.004Z",
    fills: [
      { type: "linear", x1: 235.847, y1: 184.067, x2: 336.504, y2: 6.08257, stops: [[0, "#142DA7"], [0.521569, "#7845EA"], [1, "#D36CF7"]] },
      { type: "radial", transform: [82.3638, 0, 0, 82.5596, 250.81, 145.752], stops: [[0, "#0A1555", 0.478431], [0.341176, "#102071", 0.301961], [1, "#102071", 0]] },
    ],
  },
  {
    d: "M120.273 159.259L126.542 147.517C140.809 125.974 155.563 131.224 166.114 146.755L137.103 201.062L120.273 159.259ZM132.697 135.988L132.709 135.967L132.711 135.966L132.697 135.988Z",
    fills: [
      { type: "linear", x1: 139.969, y1: 141.699, x2: 147.649, y2: 202.447, stops: [[0, "#163D78"], [0.501961, "#0A285A"], [1, "#05183E"]] },
      { type: "radial", transform: [53.7597, 0, 0, 48.5988, 137.273, 184.731], stops: [[0, "#020B2D", 0.380392], [0.478431, "#04143A", 0.219608], [1, "#04143A", 0]] },
      { type: "linear", x1: 128.641, y1: 182.14, x2: 142.081, y2: 177.28, stops: [[0, "#010817", 0.839216], [0.278431, "#020F2A", 0.611765], [0.658824, "#061B45", 0.239216], [1, "#061B45", 0]] },
    ],
  },
  {
    d: "M191.481 201.068L176.83 229.096C177.453 227.884 178.062 226.644 178.657 225.379C172.833 230.937 166.939 232.725 160.978 230.915C150.115 227.615 143.366 216.623 139.379 206.718L137.102 201.061L166.113 146.755C168.363 150.067 170.423 153.846 172.247 157.933L191.481 201.067V201.068Z",
    fills: [
      { type: "linear", x1: 156.289, y1: 229.334, x2: 182.209, y2: 145.965, stops: [[0, "#126FD0"], [0.478431, "#1151B1"], [1, "#0B3487"]] },
      { type: "radial", transform: [52.7999, 0, 0, 52.1063, 159.438, 182.434], stops: [[0, "#03143F", 0.419608], [0.4, "#08265E", 0.25098], [1, "#08265E", 0]] },
    ],
  },
];

const LogoGradientDef = ({ id, gradient }: { id: string; gradient: LogoGradient }) => {
  const stops = gradient.stops.map(([offset, color, opacity]) => (
    <stop key={offset} offset={offset} stopColor={color} stopOpacity={opacity} />
  ));
  return gradient.type === "linear" ? (
    <linearGradient id={id} gradientUnits="userSpaceOnUse" x1={gradient.x1} y1={gradient.y1} x2={gradient.x2} y2={gradient.y2}>
      {stops}
    </linearGradient>
  ) : (
    <radialGradient id={id} gradientUnits="userSpaceOnUse" cx="0" cy="0" r="1" gradientTransform={`matrix(${gradient.transform.join(" ")})`}>
      {stops}
    </radialGradient>
  );
};

const Logo = ({ className } : { className?: string }) => {
  // Header and footer both render the logo, so gradient ids are scoped per instance.
  const uid = useId();
  const layers = LOGO_SHAPES.flatMap(({ d, fills }, i) =>
    fills.map((gradient, j) => ({ d, gradient, id: `${uid}logo-${i}-${j}` })),
  );

  return (
    <svg viewBox={`0 0 ${LOGO_VIEWBOX.width} ${LOGO_VIEWBOX.height}`} xmlns="http://www.w3.org/2000/svg" className={className}>
      <defs>
        {layers.map(({ id, gradient }) => <LogoGradientDef key={id} id={id} gradient={gradient} />)}
      </defs>
      {layers.map(({ id, d }) => <path key={id} d={d} fillRule="evenodd" fill={`url(#${id})`} />)}
    </svg>
  );
};

export default Logo;
