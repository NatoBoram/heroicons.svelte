<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PlusCircleSvelte from '../../../lib/20/solid/plus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PlusCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="PlusCircle" />
