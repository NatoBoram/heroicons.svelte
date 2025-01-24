<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PauseCircleSvelte from '../../../lib/20/solid/pause-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PauseCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PauseCircle" />
