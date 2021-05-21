--- Intro ---
- Checkboxes stay aligned with titles "Results" & "Contents"
- Vertical text sizes with remaining space under Checkboxes
---

--- CSS Tips ---
- Vertical text is a child of a div with 0px width and height
-- Makes positioning much easier, as transform rotation also rotates the positioning relativity (top, left, etc.)
-- 'transform' used instead of 'text-orientation' for browser compat (IE)
---

--- Demo ---
- Try resizing your window
- Go to currentWork.css ln 72 and change the height value
---