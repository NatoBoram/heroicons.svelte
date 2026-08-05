<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import MinusCircleSvelte from '../../../lib/20/solid/minus-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: MinusCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="MinusCircle" />
