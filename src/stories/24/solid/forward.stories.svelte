<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ForwardSvelte from '../../../lib/24/solid/forward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: ForwardSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="Forward" />
