<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackwardSvelte from '../../../lib/20/solid/backward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: BackwardSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Backward" />
