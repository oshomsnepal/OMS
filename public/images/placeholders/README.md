# Photography placeholders

The frontend uses `components/shared/ResponsiveImage.tsx` to render neutral, labeled placeholders while preserving each Stitch image container's dimensions, aspect ratio, crop, and radius. Real images uploaded in Decap CMS are stored in `public/images/uploads/` and automatically replace these placeholders without layout changes.
