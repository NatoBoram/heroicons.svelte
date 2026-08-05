<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseCircleSvelte from '../../../lib/20/solid/pause-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PauseCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="PauseCircle" />
