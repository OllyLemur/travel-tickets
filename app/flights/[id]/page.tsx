'use client'

import React from 'react'

export default function page({ params }: { params: { id: string }} ) {
  return (
    <div>
    This if information about flight {params.id}
    </div>
  )
}
