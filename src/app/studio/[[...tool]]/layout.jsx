export const metadata = {
  title: 'Sanity Studio - NSATWK',
  description: 'Content management for Nigeria Satellite Week',
}

export default function StudioLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
