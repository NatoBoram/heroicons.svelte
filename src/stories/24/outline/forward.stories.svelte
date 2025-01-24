<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ForwardSvelte from '../../../lib/24/outline/forward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: ForwardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Forward" />
