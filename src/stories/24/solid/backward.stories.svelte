<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackwardSvelte from '../../../lib/24/solid/backward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BackwardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Backward" />
