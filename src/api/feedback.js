
export const addAdminFeedback = async (feedback) => {
  const res = await fetch(`${import.meta.env.VITE_URL}/feedback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })
  const data = await res.json()
  return data
}



