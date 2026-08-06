<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import StopCircleSvelte from '../../../lib/20/solid/stop-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: StopCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="StopCircle" />
