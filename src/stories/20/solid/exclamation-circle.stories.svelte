<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import ExclamationCircleSvelte from '../../../lib/20/solid/exclamation-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: ExclamationCircleSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="ExclamationCircle" />
