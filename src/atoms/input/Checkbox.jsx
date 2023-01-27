import { useControlled } from '@hooks/use-controlled'
import styles from '@style'
import { useCallback } from 'react'
import { memo } from 'react'

/**
 * Core checkbox
 * @param {Object} checkboxProps
 * @param {string} checkboxProps.label - The text or icon used for the toggle
 * @param {boolean} checkboxProps.initial - The initial value
 * @param {boolean} checkboxProps.checked - If set the control becomes controlled
 * @param {boolean} checkboxProps.style - Style object (as a last resort)
 * @param {import("@types").ToggleKind} checkboxProps.kind - The type of toggle
 * @param {React.EffectCallback} checkboxProps.onCheck
 * @param {boolean} checkboxProps.disabled - Disables the checkbox
 *
 */
const Checkbox = ({
  name,
  label,
  initial,
  onCheck = () => null,
  onBlur = () => null,
  onWheel = () => null,
  disabled,
  checked: checkedProp,
  autoFocus = false,
}) => {
  const [checked, setChecked] = useControlled(checkedProp, initial)

  const handleCheck = useCallback(
    (e) => {
      const { checked } = e.target
      setChecked(checked)
      onCheck?.(checked)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [checked]
  )
  return (
    <label className={styles.check_container}>
      {label}
      <input
        defaultChecked={initial}
        type="checkbox"
        name={name}
        onChange={handleCheck}
        onBlur={onBlur}
        onWheel={onWheel}
        checked={checkedProp}
        aria-checked={checked}
      />
      <span className={styles.checkmark} />
    </label>
  )
}

export default memo(Checkbox)