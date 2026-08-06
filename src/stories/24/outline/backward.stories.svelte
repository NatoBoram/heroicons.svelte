<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import BackwardSvelte from '../../../lib/24/outline/backward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: BackwardSvelte,
		args: { class: '' },
	})
</script>

<Story name="Backward" />
