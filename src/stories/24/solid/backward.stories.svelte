<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackwardSvelte from '../../../lib/24/solid/backward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: BackwardSvelte,
		args: { class: '' },
	})
</script>

<Story name="Backward" />
