<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ForwardSvelte from '../../../lib/20/solid/forward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ForwardSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Forward" />
