import React, { memo } from 'react'
	import PropTypes from 'prop-types'
  import useSmplrJs from './hooks/useSmplrJs'

	const Viewer = memo(({ mode, onReady, onModeChange }) => {
  useSmplrJs({ onLoad })

	  function onLoad () {
	    const space = new smplr.Space({
	      spaceId: 'a3a34437-b393-4666-8911-aaaad38926d0', // prod
	      // spaceId: '96eae952-ef60-4058-aba1-6ace322506e7', // dev
	      spaceToken: 'X',
	      containerId: 'smplr-container'
	    })
	    space.startViewer({
	      preview: true,
	     mode,
      allowModeChange: true,
      onModeChange,
      onReady: () => onReady(space),
      onError: error => console.error('Could not start viewer', error)
	    })
	  }
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '60%'
      }}
    >
      <div
        id='smplr-container'
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'whitesmoke'
        }}
      />
    </div>
  )
})

Viewer.propTypes = {
  mode: PropTypes.string.isRequired,
  onReady: PropTypes.func.isRequired,
  onModeChange: PropTypes.func
}

export default Viewer