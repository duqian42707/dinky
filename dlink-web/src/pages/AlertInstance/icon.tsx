import Icon from "@ant-design/icons";
import {ALERT_TYPE} from "@/pages/AlertInstance/conf";

const svgSize = '100px';

export const getAlertIcon = (type: string) => {
  switch (type) {
    case ALERT_TYPE.DINGTALK:
      return (<Icon component={DingTalkSvg}/>);
    case ALERT_TYPE.WECHAT:
      return (<Icon component={WeChatSvg}/>);
    default:
      return (<Icon component={DingTalkSvg}/>);
  }
};

export const DingTalkSvg = () => (
  <svg t="1645760285485" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
       p-id="1804" width={svgSize} height={svgSize}>
    <path
      d="M512.003 79C272.855 79 79 272.855 79 512.003 79 751.145 272.855 945 512.003 945 751.145 945 945 751.145 945 512.003 945 272.855 751.145 79 512.003 79z m200.075 375.014c-0.867 3.764-3.117 9.347-6.234 16.012h0.087l-0.347 0.648c-18.183 38.86-65.631 115.108-65.631 115.108l-0.215-0.52-13.856 24.147h66.8L565.063 779l29.002-115.368h-52.598l18.27-76.29c-14.76 3.55-32.253 8.436-52.945 15.1 0 0-27.967 16.36-80.607-31.5 0 0-35.501-31.29-14.891-39.078 8.744-3.33 42.466-7.573 69.004-11.122 35.93-4.845 57.965-7.441 57.965-7.441s-110.607 1.643-136.841-2.468c-26.237-4.11-59.525-47.905-66.626-86.377 0 0-10.953-21.117 23.595-11.122 34.547 10 177.535 38.95 177.535 38.95s-185.933-56.992-198.36-70.929c-12.381-13.846-36.406-75.902-33.289-113.981 0 0 1.343-9.521 11.127-6.926 0 0 137.49 62.75 231.475 97.152 94.028 34.403 175.76 51.885 165.2 96.414z"
      fill="#3AA2EB" p-id="1805"></path>
  </svg>
);

export const WeChatSvg = () => (
  <svg t="1645799602238" className="icon" viewBox="0 0 1229 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
       p-id="1438" width={svgSize} height={svgSize}>
    <path
      d="M980.52 269.052a432.419 432.419 0 0 0-78.787-111.08A535.486 535.486 0 0 0 577.458 4.682a608.798 608.798 0 0 0-67.124-3.81 598.008 598.008 0 0 0-64.268 3.571 536.12 536.12 0 0 0-326.1 152.418 432.816 432.816 0 0 0-79.342 111.08A384.575 384.575 0 0 0 0 439.877a392.589 392.589 0 0 0 67.997 218.828 599.595 599.595 0 0 0 93.228 105.844l-15.313 119.57c-0.556 1.666-1.27 3.252-1.667 4.919s0 3.253-0.555 4.84 0 2.38 0 3.65v3.887a39.116 39.116 0 0 0 38.878 35.15 39.671 39.671 0 0 0 19.44-5.317h0.555l2.46-1.428 36.576-18.249 109.097-54.35a568.492 568.492 0 0 0 95.211 18.17 580.473 580.473 0 0 0 64.268 3.57 608.084 608.084 0 0 0 67.124-3.888 577.855 577.855 0 0 0 128.536-29.833 77.835 77.835 0 0 1-12.933-5.792 70.14 70.14 0 0 1-35.308-67.838 478.28 478.28 0 0 1-91.165 19.28 490.022 490.022 0 0 1-56.254 3.333 511.841 511.841 0 0 1-53.874-2.936l-11.108-1.507a486.69 486.69 0 0 1-72.122-14.996 49.748 49.748 0 0 0-14.996-2.301 51.89 51.89 0 0 0-23.803 6.189 28.167 28.167 0 0 0-3.095 1.586L241.6 832.704l-3.888 2.222a8.49 8.49 0 0 1-4.046 1.507 6.11 6.11 0 0 1-5.95-6.11l3.411-13.884 4.046-14.996 6.507-24.755 7.22-27.532a39.671 39.671 0 0 0 1.825-11.346 37.37 37.37 0 0 0-15.313-30.23 396.397 396.397 0 0 1-37.45-31.26 360.296 360.296 0 0 1-53.001-62.285 309.993 309.993 0 0 1-53.874-172.57 303.09 303.09 0 0 1 31.737-135.36 345.777 345.777 0 0 1 63.474-88.785A443.051 443.051 0 0 1 456.063 91.8a485.5 485.5 0 0 1 110.128 0 442.972 442.972 0 0 1 268.18 126.155 346.57 346.57 0 0 1 63.474 89.102 303.328 303.328 0 0 1 31.737 134.17c0 4.839 0 9.6-0.556 14.44a71.409 71.409 0 0 1 87.278 10.155c1.19 1.19 2.142 2.46 3.253 3.73a371.477 371.477 0 0 0 1.19-29.754 385.369 385.369 0 0 0-39.672-170.587"
      fill="#2484DD" p-id="1439"></path>
    <path
      d="M1206.885 704.248a71.409 71.409 0 0 0-100.289 0 70.377 70.377 0 0 0-18.963 33.959c0 1.428-0.635 2.777-0.873 4.205s0 2.856-0.555 4.284a216.448 216.448 0 0 1-60.46 113.778c-2.3 2.301-4.76 4.602-7.14 6.744a16.662 16.662 0 0 0 0 23.803 17.138 17.138 0 0 0 22.692 1.19l1.27-1.19a11.267 11.267 0 0 0 1.983-2.38l4.76-4.84a218.272 218.272 0 0 1 111.795-59.507 64.11 64.11 0 0 0 6.823-0.714 60.777 60.777 0 0 0 7.934-1.666 70.298 70.298 0 0 0 31.738-117.745"
      fill="#0080ED" p-id="1440"></path>
    <path
      d="M974.093 883.642a39.195 39.195 0 0 0-4.205-0.793 39.671 39.671 0 0 0-4.284-0.635 217.955 217.955 0 0 1-114.572-60.062 142.024 142.024 0 0 1-6.823-7.062 16.98 16.98 0 0 0-23.803 0 16.82 16.82 0 0 0-1.19 22.533l1.19 1.27a18.566 18.566 0 0 0 2.38 1.983l4.92 4.682a216.448 216.448 0 0 1 59.903 111.08 65.617 65.617 0 0 0 0.715 6.903c0.476 2.46 0.952 4.919 1.586 7.379a69.425 69.425 0 0 0 18.329 31.26 71.409 71.409 0 0 0 100.29 0 69.98 69.98 0 0 0 0-99.654 70.774 70.774 0 0 0-34.198-18.804"
      fill="#FA6A07" p-id="1441"></path>
    <path
      d="M906.81 500.099a70.457 70.457 0 0 0 34.197 118.538l4.285 0.793 4.284 0.556a218.272 218.272 0 0 1 114.572 60.062l6.823 7.062a17.059 17.059 0 0 0 23.803 0 16.583 16.583 0 0 0 1.11-22.454 9.124 9.124 0 0 0-1.11-1.349 17.852 17.852 0 0 0-2.38-1.904l-4.92-4.76a215.257 215.257 0 0 1-59.904-111.08c0-2.302 0-4.603-0.714-6.824s-1.031-4.999-1.666-7.459a71.409 71.409 0 0 0-119.014-31.26"
      fill="#33BD00" p-id="1442"></path>
    <path
      d="M828.499 759.788c0-1.428 0.476-2.856 0.635-4.285a216.05 216.05 0 0 1 60.38-113.777l7.14-6.744a16.741 16.741 0 0 0 0-23.803 16.98 16.98 0 0 0-22.612-1.111l-1.349 1.11a24.993 24.993 0 0 0-1.904 2.381l-4.84 4.84a217.4 217.4 0 0 1-111.794 59.507c-2.222 0-4.523 0-6.824 0.794a47.606 47.606 0 0 0-7.458 1.586 70.298 70.298 0 0 0-31.737 117.745 71.409 71.409 0 0 0 100.29 0 69.663 69.663 0 0 0 18.962-33.958c0-1.429 0.556-2.777 0.794-4.206"
      fill="#FCC935" p-id="1443"></path>
  </svg>
);
