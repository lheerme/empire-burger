import type { ChangeEvent } from 'react'

interface HamburgerProps {
  isChecked: boolean
  setIsChecked: (arg0: boolean) => void
}

export function Hamburger({ isChecked, setIsChecked }: HamburgerProps) {
  function handleCheckboxChange(event: ChangeEvent<HTMLInputElement>) {
    setIsChecked(event.target.checked)

    if (event.target.checked) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <label
      htmlFor="menu_checkbox"
      className="min-[1040px]:hidden size-10 cursor-pointer p-2.5 bg-title-black-38/15 rounded-md z-[3]"
    >
      <input
        type="checkbox"
        id="menu_checkbox"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <div className="relative top-0 h-1 bg-title-black-38/90 mb-1 transition-transform ease-in-out rounded-sm origin-[0] peer-checked:-top-0.5 peer-checked:[transform:rotateZ(45deg)]" />
      <div className="relative top-0 right-0 h-1 bg-title-black-38/90 mb-1 transition-transform ease-in-out rounded-sm peer-checked:w-[30px] peer-checked:top-0 peer-checked:right-[5px] peer-checked:[transform:rotateZ(-45deg)]" />
      <div className="relative top-0 h-1 bg-title-black-38/90 transition-transform ease-in-out rounded-sm peer-checked:-top-[5px] peer-checked:-right-[3px] peer-checked:[transform:rotateZ(45deg)]" />
    </label>
  )
}
