<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import EqualsSvelte from '../../../lib/20/solid/equals.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: EqualsSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Equals" />
