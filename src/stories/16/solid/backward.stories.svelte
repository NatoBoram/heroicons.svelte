<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackwardSvelte from '../../../lib/16/solid/backward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: BackwardSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="Backward" />
