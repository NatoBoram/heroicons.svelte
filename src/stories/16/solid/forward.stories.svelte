<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ForwardSvelte from '../../../lib/16/solid/forward.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: ForwardSvelte,
		args: { class: '' },
	})
</script>

<Story name="Forward" />
