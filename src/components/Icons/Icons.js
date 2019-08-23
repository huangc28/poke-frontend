/* global __SERVER__ */

import React, { PureComponent } from 'react';
import {
  string,
  number,
} from 'prop-types';

const loadedSvgs = [];

class Svg extends PureComponent {
  componentDidMount() {
    const { iconUrl } = this.props;
    const self = this;
    const xhr = new XMLHttpRequest();
    const svgIndex = loadedSvgs.findIndex(obj => obj.iconUrl === iconUrl);
    if (svgIndex === -1) {
      xhr.onload = function () {
        const svgDoc = new DOMParser().parseFromString(this.response, 'image/svg+xml');
        const svgDom = svgDoc.querySelector('svg');
        svgDom.style.cssText = 'width: 100%; height: 100%';
        if (self._svg) {
          self._svg.appendChild(svgDoc.documentElement);
        }
        loadedSvgs.push({
          iconUrl,
          svg: this.response,
        });
      };
      xhr.open('get', iconUrl);
      xhr.send();
    } else {
      const svgDoc = new DOMParser().parseFromString(loadedSvgs[svgIndex].svg, 'image/svg+xml');
      const svgDom = svgDoc.querySelector('svg');
      svgDom.style.cssText = 'width: 100%; height: 100%';
      if (self._svg) {
        self._svg.appendChild(svgDoc.documentElement);
      }
    }
  }

  render() {
    const {
      className = styles.root,
      // This is a unused variable. Putting here just in order to use
      // destructuring assignment to retrieve restProps
      iconUrl, // eslint-disable-line no-unused-vars
      width,
      height,
      ...restProps
    } = this.props;

    return (
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
        }}
        {...restProps}
        className={className}
        ref={c => { this._svg = c; }}
      />
    );
  }
}

Svg.defaultProps = {
  className: '',
  iconUrl: '',
};

Svg.propTypes = {
  height: number.isRequired,
  width: number.isRequired,
  className: string,
  iconUrl: string,
};

const Icon = filename => {
  if (__SERVER__) {
    const _ssrIcon = ({ width, height }) => {
      // eslint-disable-next-line global-require
      const imgUrl = require(`./images/${filename}`);

      return (
        <img
          width={width}
          height={height}
          src={imgUrl}
        />
      );
    };

    _ssrIcon.propTypes = {
      height: number,
      width: number,
    };

    _ssrIcon.defaultProps = {
      width: 32,
      height: 32,
    };

    return _ssrIcon;
  }

  // eslint-disable-next-line global-require
  const imageUrl = require(`!file-loader?[hash].[ext]!./images/${filename}`);
  const isSVG = filename.split('.').pop() === 'svg';

  const _Icon = props => {
    const {
      alt,
      className,
      width,
      height,
    } = props;

    // don't use file-loader to pipe image assets as file-loader only exists in backend.
    return (
      <div>
        {
          isSVG
            ? (<Svg
              {...props}
              iconUrl={imageUrl}
              className={className}
              alt={alt}
              width={width}
              height={height}
            />)
            : (<img
              {...props}
              src={imageUrl}
              alt={alt}
              width={width}
              height={height}
            />)
        }
      </div>
    );
  };

  _Icon.propTypes = {
    alt: string,
    className: string,
    height: number,
    width: number,
  };

  _Icon.defaultProps = {
    alt: '',
    className: '',
    height: 32,
    width: 32,
  };

  return _Icon;
};

export default Icon;

export const Facebook = Icon('facebook.svg')
export const Instagram = Icon('instagram.svg')
export const RecentUpdatedDate = Icon('date_blue.png')
export const NumViews = Icon('ppl_blue.png')
export const More = Icon('more.png')
export const DateWhite = Icon('date.png')
export const PPWhite = Icon('ppl_white.png')