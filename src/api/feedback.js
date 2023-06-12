
export const addAdminFeedback = async (feedback) => {
  const res = await fetch('http://localhost:5000/feedback', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(feedback),
  })
  const data = await res.json()
  return data
}



