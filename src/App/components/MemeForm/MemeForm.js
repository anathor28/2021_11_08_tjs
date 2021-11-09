import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import style from "./MemeForm.module.scss";
import Button from "../Button/Button";

/**
 * etat initial du state de MemeForm
 */
export const initialState = {};
/**
 * Composant MemeForm
 * @param {object} props props du comp MemeForm
 * @returns render of MemeForm
 */
const MemeForm = (props) => {
  // const [state, setstate] = useState(initialState);
  // useEffect(() => {
  //     //didMount & didUpdate
  //     return () => {
  //       //willUnMount
  //     }
  // }, [state]);
  return (
    <div className={style.MemeForm} data-testid="MemeForm">
      <form>
        <input
          type="text"
          placeholder="saisissez le titre"
          value={props.currentMeme.titre}
          onChange={(evt) => {
            props.onCurrentChange({
              ...props.currentMeme,
              titre: evt.target.value,
            });
          }}
        />
        <hr />
        <h2>Image</h2>
        <select
          value={props.currentMeme.imageId}
          onChange={(evt) => {
            props.onCurrentChange({
              ...props.currentMeme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          {props.images.map((e, i) => (
            <option key={`image-option-${i}`} value={e.id}>
              {e.titre}
            </option>
          ))}
        </select>
        <hr />
        <h2>text</h2>
        <input
          type="text"
          placeholder="text du meme"
          value={props.currentMeme.text}
          onChange={(evt) => {
            props.onCurrentChange({
              ...props.currentMeme,
              text: evt.target.value,
            });
          }}
        />
        <div className={style.col2}>
          <div>
            <label htmlFor="x">X :</label>
            <br />
            <input
              className={style.smallInput}
              type="number"
              id="x"
              value={props.currentMeme.x}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  x: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="y">Y :</label>
            <br />
            <input
              className={style.smallInput}
              type="number"
              id="y"
              value={props.currentMeme.y}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  y: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <h2>Style</h2>

        <div>
          <label htmlFor="color">Couleur</label>
          <br />
          <input
            type="color"
            id="color"
            className={style.smallInput}
            value={props.currentMeme.color}
            onChange={(evt) => {
              props.onCurrentChange({
                ...props.currentMeme,
                color: evt.target.value,
              });
            }}
          />
        </div>
        <div className={style.col2}>
          <div>
            <input
              type="checkbox"
              id="underline"
              checked={props.currentMeme.underline}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  underline: evt.target.checked,
                });
              }}
            />
            <label htmlFor="underline">underline</label>
          </div>
          <div>
            <label htmlFor="italic">italic</label>
            <input
              type="checkbox"
              id="italic"
              checked={props.currentMeme.italic}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  italic: evt.target.checked,
                });
              }}
            />
          </div>
        </div>
        <div className={style.col2}>
          <div>
            <label htmlFor="weight">fontWeight</label>
            <br />
            <input
              type="number"
              id="weight"
              min="100"
              max="900"
              step="100"
              className={style.smallInput}
              value={props.currentMeme.fontWeight}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  fontWeight: evt.target.value,
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="size">fontsize</label>
            <br />
            <input
              type="number"
              id="size"
              min="1"
              className={style.smallInput}
              value={props.currentMeme.fontSize}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  fontSize: evt.target.value,
                });
              }}
            />
          </div>
        </div>
        <hr />
        <h2>Frame</h2>
        <div className={style.col2}>
          <div>
            <label htmlFor="fx">horizontal :</label>
            <br />
            <input
              className={style.smallInput}
              type="number"
              id="fx"
              min="0"
              value={props.currentMeme.fx}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  fx: Number(evt.target.value),
                });
              }}
            />
          </div>
          <div>
            <label htmlFor="fy">vertical :</label>
            <br />
            <input
              className={style.smallInput}
              type="number"
              id="fy"
              value={props.currentMeme.fy}
              onChange={(evt) => {
                props.onCurrentChange({
                  ...props.currentMeme,
                  fy: Number(evt.target.value),
                });
              }}
            />
          </div>
        </div>
        <hr />
        <Button type="reset" bgColor="tomato">
          clear
        </Button>
        <Button type="submit">Save</Button>
      </form>
    </div>
  );
};

MemeForm.propTypes = {
  currentMeme: PropTypes.object.isRequired,
  onCurrentChange: PropTypes.func.isRequired,
  images: PropTypes.array.isRequired,
};
MemeForm.defaultProps = {};

export default MemeForm;
